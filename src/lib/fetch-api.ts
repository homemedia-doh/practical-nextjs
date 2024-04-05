const tempServerAdd = "http://localhost:1337";
export async function fetchGET({ url, method, }: { url: string, method: 'GET' }) {
  let fetchOption: any = {
    method,
    headers: {
      'content-type': 'application/json'
    },
  }

  try {
    //return await ((await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URI}/${url}`, fetchOption)).json())
    return await ((await fetch(`${tempServerAdd}/${url}`, fetchOption)).json())
  } catch (error) {
    return error;
  }
}
