import React  from 'react'

function View({viewData}) {
    
    const viewString = viewData[0].desc.join("<br/>")
    
    // function createMarkup() {
    //     return {__html: viewString};
    // }

    return (
            <ul className='list_views'>
                {viewData.map((data) => (
                    <li>
                        <div className='box_view'>
                            <strong className='tit_view'>{data.title}</strong>
                            {/* <p className='desc_view'>{data.desc[0]}<br />{data.desc[1]}</p> */}
                            <p className='desc_view' dangerouslySetInnerHTML={{__html: data.desc.join('<br/>')}}></p>
                            <div className='thumb_view'><img src={data.url} alt="" className='img_g'/></div>
                        </div>
                    </li>
                ))}
            </ul>
        
    )
}

export default View