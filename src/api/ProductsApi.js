

export const FetchProducts = async (limit, skip) => {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  