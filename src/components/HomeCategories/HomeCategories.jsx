import { Link } from 'react-router-dom'
import './HomeCategories.css'
function HomeCategories() {

    return (


        <div className='main-categories-div'>
            <div className='cat-outer-box'>
                <Link to={`/catg/sub/0`}>
                    <div id='edu-box' className='cat-box'></div>
                    <div className='cat-heading'><h1 >Edukacija</h1></div>
                </Link>
            </div>

            <div className='cat-outer-box'>
                <Link to={`/catg/sub/1`}>
                    <div id='birth-box' className='cat-box'></div>
                    <div className='cat-heading'><h1 >Rodjendan</h1></div>
                </Link>
            </div>
            
            <div className='cat-outer-box'>
                <Link to={`/catg/sub/2`}>
                    <div id='shopp-box' className='cat-box'></div>
                    <div className='cat-heading'><h1 >Kupovina</h1></div>
                </Link>
            </div>
            <div className='cat-outer-box'>
                <Link to={`/catg/sub/4`}>
                    <div id='sport-box' className='cat-box'></div>
                    <div className='cat-heading'><h1 >Sport</h1></div>
                </Link>
            </div>
            <div className='cat-outer-box' id='healt-outer-box'>
                <Link to={`/catg/sub/3`}>
                    <div id='health-box' className='cat-box'></div>
                    <div className='cat-heading'><h1 >Zdravstvo</h1></div>
                </Link>
            </div>
        {/* <div >
            <div bgImage={'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1048&q=80'}>
            <div  alignItems={'end'}  color={'white'}><h1 fontSize={'5xl'}>Škola</h1></div>

            </div>
            <div bgImage={'https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'}>
            <div  alignItems={'end'}  color={'white'}><h1 fontSize={'5xl'}>Vrtić</h1></div>

            </div>
            <div bgImage={'https://images.unsplash.com/photo-1590407499464-be68a7d8ec88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'}>
            <div  alignItems={'end'}  color={'white'}><h1 fontSize={'4xl'}>Strani jezik</h1></div>

            </div>
            <div bgImage={'https://plus.unsplash.com/premium_photo-1661776548273-21ade2bf06d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}>
            <div  alignItems={'end'}  color={'white'}><h1 fontSize={'5xl'}>Umetnost</h1></div>

            </div>
        </div> */}
    </div>
    )
}

export default HomeCategories