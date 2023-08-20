import React, { useEffect, useState } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { useNavigate, useParams } from 'react-router-dom';



const Gallery = () => {
    const [imageUrls, setImageUrls] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const { category: initialCategory } = useParams(); // Get category from route parameter

    // Set initial category based on the URL or use 'landscape' as the default
    const [category, setCategory] = useState(initialCategory || 'landscape');

    useEffect(() => {
        fetchImagesByCategory(category)
    }, [category]);

    const imageCategoryLinks = [
        { category: "Landscape", path: "landscape" },
        { category: "Lamborghini Hurucan Tecnica", path: "lamborghini-hurucan-tecnica" },
        { category: "Porsche GT3/GT3RS", path: "porsche-gt3-gt3rs"},
        { category: "Nissan GT-R Liberty Walk", path: "nissan-gt-r-liberty-walk" },
        { category: "Mercedes AMG G63 x C63s", path: "mercedes-amg-g63-x-c63s" },
        { category: "Porsche GT3 Cup Kit", path: "porsche-gt3-cup-kit" },
        { category: "BMW M2 Darwin Pro", path: "bmw-m2-darwin-pro" },
        { category: "Velocity Invitational", path: "velocity-invitational" },
        { category: "Mercedes Benz x IWC x Top Gun Event", path: "mercedes-benz-x-iwc-x-top-gun-event" },
        { category: "Mclaren 600LT", path: "mclaren-600lt" },
        { category: "Lamborghini Aventador SVJ", path: "lamborghini-aventador-svj" },
        { category: "Ford GT", path: "ford-gt" },
        { category: "Lamborghini Huracan Performante/STO", path: "lamborghini-huracan-performante-sto" },
        { category: "Mclaren 765LT", path: "mclaren-765lt" },
        { category: "Porsche 993 RWB", path: "porsche-993-rwb" },
    ]

    const fetchImagesByCategory = async (category_path) => {
        try {
            setLoading(false)
            const response = await fetch(`http://127.0.0.1:5000/api/images/${category_path}/`)
            const data = await response.json()
            setImageUrls(data.imageUrls)
        } catch (error) {
            console.error('Error fectching images:', error)
        }
        setLoading(true)
        navigate(`/portfolio/${category_path}`);
    }

    return (
        <div id="gallery_container">
            <div id="gallery_sort">
                <h1>Sort By:</h1>

                <ul id="categories">
                    {imageCategoryLinks.map((imageCategoryLink) => (
                        <li><p className={`links ${category === imageCategoryLink.path ? 'active' : ''}`} onClick={() => setCategory(imageCategoryLink.path)}>{imageCategoryLink.category}</p></li>
                    ))}
                </ul>
            </div>
            
            <div id="gallery">
                { loading ? (
                    <div id="gallery_images">
                        {imageUrls.map((imageUrl) => (
                            <img src={imageUrl} loading="lazy" alt="Images" />
                        ))}
                    </div>
                ) : (
                    <div id="loader_icon">
                        <HashLoader color="#000000" size="70"/>
                    </div>
                )}
            </div>

            <br></br>
        </div>
    )
}

export default Gallery
