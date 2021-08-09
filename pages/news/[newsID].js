import { useRouter } from 'next/router'


function DetailsPage(){
    const router = useRouter();

    console.log(router.query.newsID  );

    return <h1>The Details Page</h1>
    }
    
    export default DetailsPage;