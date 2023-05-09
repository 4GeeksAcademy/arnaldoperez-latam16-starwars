const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      favorites:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchStarWars: async (elementType, page = 1, limit = 10) => {
				let baseUrl = `https://www.swapi.tech/api/${elementType}?page=${page}&limit=${limit}`
				try {
					let response = await fetch(baseUrl)
					if (!response.ok) return response.status

					let data = await response.json()
					let obj = {}
					obj[elementType] = data[elementType=="films"?"result":"results"].map(item=>({
            ...item,
            img:`https://starwars-visualguide.com/assets/img/${elementType=="people"?"characters":elementType}/${item.uid}.jpg`
          }))
					setStore(obj)
          return {
            pages:data.total_pages, 
            records:total_records
          }
				} catch (error) {
					console.error(error)
				}
			},
      markFavorite:(elementId, name)=>{
        console.log({elementId,name})
        let {favorites}=getStore()
        // Verificando si el favorito ya existe
        if(!favorites.some(item=>item.id==elementId)){
          // En caso de que NO exista, se agrega....
          setStore({favorites:[...favorites,{id:elementId, name}]})
        }
        else{
          // En caso de que SI exista, se elimina....
          let index=favorites.findIndex(item=>item.id==elementId)
          let newFavorites=[...favorites]
          newFavorites.splice(index,1)
          setStore({favorites:newFavorites})
        }
      }
		}
	};
};

export default getState;
