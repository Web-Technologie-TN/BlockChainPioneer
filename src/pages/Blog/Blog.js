import { useState, useEffect } from "react";
import Paginate from "../../components/paginate";
import {Link} from "react-router-dom";
function Blog() {

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(resp => resp.json())
            .then( json => {
                setPosts(json)
            })

    }, [setPosts])

    const getRandomDate = () => {

        const maxDate = Date.now();
        const timestamp = Math.floor(Math.random() * maxDate);
        return new Date(timestamp).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

    }

    const paginate = (pageNumber) => {

        setCurrentPage(pageNumber)

    }

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if (currentPage !== Math.ceil(posts.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (

        <>

            {
                posts ? (

                    <>

                        <div id="blog" className="row mt-3">
                            {
                                currentPosts.map( (post, i) => {

                                    return (

                                        <div key={ "post" + i } className={ i == 0 ? "col-12" : "col-6" }>
                                            <div className="card mb-4">
                                                <Link to={ "/blog/" + post.id }>
                                                    <img className="card-img-top" src={ "https://picsum.photos/" + ( 700 + post.id )  + "/350" } alt="..."/>
                                                </Link>
                                                <div className="card-body">
                                                    <div className="small text-muted">{ getRandomDate() }</div>
                                                    <h2 className="card-title post-title h4">{ post.title }</h2>
                                                    <p className="card-text post-text">{ post.body }</p>
                                                    <Link className="btn btn-primary" to={ "/blog/" + post.id } href="#!">Read more →</Link>
                                                </div>
                                            </div>
                                        </div>

                                    )

                                })
                            }

                        </div>

                        <Paginate
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={paginate}
                            previousPage={previousPage}
                            nextPage={nextPage}
                            currentPage={currentPage}
                        />

                    </>

                ) : (

                    <div className="loading">Loading...</div>

                )

            }

        </>

    )

}

export default Blog

