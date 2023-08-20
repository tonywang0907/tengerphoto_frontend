import React, { useState, useEffect } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { Link, useLocation } from 'react-router-dom'

const Showcase = () => {
    const [imageUrls, setImageUrls] = useState([])
    const [loading, setLoading] = useState(false)


    // useEffect to run when the component mounts
    useEffect(() => {
        getImages() // Fetch images
    }, [])

    // Function to fetch images from the server
    const getImages = async () => {
        try {
            setLoading(false)
            let response = await fetch('http://127.0.0.1:5000/api/images/showcase/')
            let data = await response.json()
            setImageUrls(data.imageUrls)
        } catch (error) {
            console.error('Error fetching images:', error)
        }
        setLoading(true) 
    }

    const parseImageName = (imageUrl) => {
        const parts = imageUrl.split('/')
        const imgNameWithExtension = parts[parts.length - 1]
        const imgNameWithoutExtension = imgNameWithExtension.split('.')[0]
        const parsedImgName = imgNameWithoutExtension.replaceAll('%20', ' ')
        return parsedImgName
    }

    const parseCategoryName = (imageUrl) => {
        const categoryName = parseImageName(imageUrl)
        const parsedCategoryName = categoryName.toLowerCase().replaceAll(/[\s/]/g, "-")
        return parsedCategoryName
    }

    return (
        <div id="showcase_container">
            {loading ? (
                <div id="showcase_images">
                    {imageUrls.map((imageUrl) => (
                        <Link to={`/portfolio/${parseCategoryName(imageUrl)}/`} id="showcase_image">
                            <img src={imageUrl} loading="lazy" alt="Images"/>
                                                            
                            <div id="showcase_image_content">
                                <h1>{parseImageName(imageUrl)}</h1>

                                <p>Click to see more!</p>
                            </div>                      
                        </Link>
                    ))}
                </div>
            ) : (
                <div id="loader_icon">
                    <HashLoader color="#000000" size="70"/>
                </div>
            )}
        </div>  
    )
}

export default Showcase
