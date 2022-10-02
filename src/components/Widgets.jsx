import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import { FiberManualRecord } from '@mui/icons-material'

const Widgets = () => {

    const newsArticle = (heading, subtitle) =>{
       <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
       </div> 
    }

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkeIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("AI is back", "Top news - 5000 readers")}
        {newsArticle("AI is back", "Top news - 5000 readers")}
        {newsArticle("AI is back", "Top news - 5000 readers")}
        {newsArticle("AI is back", "Top news - 5000 readers")}
        {newsArticle("AI is back", "Top news - 5000 readers")}
    </div>

  )
}

export default Widgets