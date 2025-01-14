import { useFetch } from "../../hooks"

const URL = 'https://jsonplaceholder.typicode.com/posts/1';

interface Response {
    title: string;
    body: string;
}

const UseEffect = () => {
    
   const { data, error, loading } = useFetch<Response>(URL); 
  
   if (loading) 
        return <p>Loading...</p>;

    if (error) 
        return <p>Error: {error.message}</p>;

    if (data)
        return (
            <div style={{ 
                marginBottom: '3rem', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                textAlign: 'start' 
            }}>
                <h1>{data?.title}</h1>
                <h5>{data?.body}</h5>
            </div>
        );

    return null;
}

export default UseEffect