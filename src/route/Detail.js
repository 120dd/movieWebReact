import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);

    const getMovie = async () => {
        const json = await (await (await (fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json())
        setLoading(false);
        setDetails(json.data.movie);
    }

    useEffect(() => {
            getMovie()
        }
        , [])
    console.log(details);

    return (
        <div>
            <h1>Detail</h1>
            {loading ? <h2>로딩중...</h2> :
                <div>
                    <h2>{details.title}</h2>
                    <ul>
                        <li>rating:{details.rating}</li>
                        <li>like:{details.like_count}</li>
                        <li>상영시간:{(details.runtime / 60).toFixed(2)} 시간</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Detail;