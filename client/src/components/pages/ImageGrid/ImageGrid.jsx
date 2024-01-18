import React, {useState} from 'react'
import '../../assets/css/imageGrid.css'

import projects from '../../assets/images/myProjectTile.png'
import about from '../../assets/images/aboutMe.png'
import words from '../../assets/images/words.png'
import blog from '../../assets/images/blogTile.png'
import SphereWords from '../sphere/Sphere'
import AboutMe from '../About/AboutMe'
import Blog from '../Blog/Blog'

import CodeModalImages from '../sphere/CodeModalImages'

const ImageGrid = () => {
        const [showProjectModal, setProjectModal] = useState(false)
        const [showBlogModal, setBlogModal] = useState(false)
        const [showAboutModal, setAboutModal] = useState(false)
        const [showCodeModal, setCodeModal] = useState(false)
        const getProjectModal = (e) => {
                e.preventDefault()
                setProjectModal(!showProjectModal)
        }

        const getBlogModal = (e) => {
                e.preventDefault()
                setBlogModal(!showBlogModal)
        }
        const getAboutModal = (e) => {
                e.preventDefault()
                setAboutModal(!showAboutModal)
        }
        const getCodeModal = (e) => {
                e.preventDefault()
                setCodeModal(!showCodeModal)
        }
        return (
                <div className='row'>
                            <div className='column'>
                             
                        </div>
                   
                        <div className='column firstDiv'>

                               <a onClick={getProjectModal} href='/'> <img alt='logo' style={ { height: '253px' } } src={ projects } className='imageGrid' /></a>{showProjectModal && <div className='projectModal theme-dark'>
                                           <SphereWords />
                                               
                               </div>}
                         
                        </div>
        
                    



                        <div className='column'>
                                <a onClick={getBlogModal} href='/'><img alt='logo' style={ { height: '253px' } } className='imageGrid' src={ blog } /></a>{showBlogModal && <div className='blogModal theme-dark'><Blog /></div>}

                               <a onClick={getCodeModal} href='/'> <img alt='logo' style={ { height: '253px' } } className='codeBlock' src={ words } /></a>{showCodeModal && <div className='projectModal '><CodeModalImages /></div>}
                        </div>
                </div>
        )
}

export default ImageGrid