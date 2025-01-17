import React, { useState } from 'react'
import HeadBar from '../../Components/Headbar/HeadBar'

export const PlanetWaterResourceManagement = () => {

    const data = [
        {
            title: 'WATER RISK MANAGEMENT',
            tableData: [
                {
                    value1: 'Regularly refine internal processes and spot inefficiencies in water usage or distribution.',
                    value2: ['Periodic Water Risk Assesment exercise which helps us to improve our internal processes and facilities the identification of inefficiencies in water use or distribution system.',]
                },
            ]
        },
        {
            title: 'CONSUMPTION, MONITORING, & AWARENESS',
            tableData: [
                {
                    value1: 'Monitor water use diligently and foster awareness among stakeholders.',
                    value2: ['Generate monthly water management reports and reviews', 'Regularly check water lines and arrest any leakages', 'Consumption monitoring through automates system', 'Internal stakeholder awareness training and capacity building']
                },
            ]
        },
        {
            title: 'FOCUS ON RECYCLING & RE-USAGE',
            tableData: [
                {
                    value1: 'Increase the proportion of reused water and limit reliance on freshwater.',
                    value2: ['Rainwater harvesting fixtures.', 'Avoidance of ground water usage', 'Determine the share of fresh water and reused water']
                },
            ]
        },
        {
            title: 'MINIMISING WASTAGE',
            tableData: [
                {
                    value1: 'Prevent water wastage and maintain the integrity of water resources',
                    value2: ['Regularly check water lines and arrest any leakages.', 'Undertake preventive maintenance.', 'Installation of IoT water metres.']
                },
            ]
        },
    ];

    const [selectedTitle, setSelectedTitle] = useState(data[0].title);
    const [fadeIn, setFadeIn] = useState(false);

    const handleTitleClick = (title) => {
        setSelectedTitle(title);
        setFadeIn(true);
    };

    return (
        <div>
            <HeadBar heading={'WATER RESOURCE MANAGEMENT'} icon={'/planet-waste-mgt-heading-icon.png'} theme={'#B0BC25'} />

            <div className="wm-quick-links-section">
                <div className='wm-sticky-links'>
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="/">Goals and Progress</a></li>
                        <li><a href="/">Policies</a></li>
                        <li><a href="/">Water Resource Management</a></li>
                        <li><a href="/">Wastewater management</a></li>
                        <li><a href="/">GRI index</a></li>
                        <li><a href="/">SDG Linkages</a></li>
                        <li><a href="/">CDP reporting</a></li>
                    </ul>
                </div>
            </div>

            <div className='planet-wrm-sec1 flex'>
                <div className='planet-wm-sec1-text'>
                    <img src="/small-square-btn.png" alt="" />

                    <h1>
                        WATER MANAGEMENT
                    </h1>
                    <h2>
                        Water is indispensable for both our operations and the sustainable livelihoods of the communities where we operate. Recognising this, we uphold the commitment to ensure that our operations do not compromise the quality or availability of water resources.
                        <br />
                    </h2>
                    <p>
                        While our operations may not be water-intensive, we regard water management as a significant consideration for our Indian operations. Regular water-risk assessments are conducted to mitigate our water footprint, focusing on reducing freshwater reliance and implementing efficient recycling practices. We prioritise responsible water sourcing in line with our water management strategy, contributing positively to conservation efforts while sustaining business operations. With Aqueduct Water risk atlas 4.0, we have conducted water risk mapping exercise for our major Indian as well as international facilities. With this mapping, it is concluded that water risk is higher in Indian facilities compared to international ones.
                    </p>
                </div>
                <img src="/planet-wrm-header-img.png" alt="" />
            </div>
            <div className='planet-wrm-sec2'>
                <img src="/small-square-btn.png" alt="" />

                <h1>
                    WATER RESOURCE MANAGEMENT
                </h1>

                <div className="planet-wrm-container flex">
                    <div className="planet-wrm-little-cards">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`planet-wrm-little-card poppins-medium ${selectedTitle === item.title ? 'wrm-active' : ''}`}
                                onClick={() => handleTitleClick(item.title)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                    <div className={`wrm-main-card ${fadeIn ? 'fade-in' : ''}`}>
                        <table className='wrm-table'>
                            <tbody className={`wrm-table-body`}>
                                <th className='wrm-data'>OBJECTIVE</th>
                                <th className='wrm-data'>ACTIONS</th>
                                {data.find((item) => item.title === selectedTitle).tableData.map((rowData, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td className='wrm-data1'>{rowData.value1}</td>
                                        <td className='wrm-data'>
                                            <ul>
                                                {rowData.value2.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>
                <div>

                </div>
                <div className='wrm-sec2-context2'>
                    <div className='bar-heading-parent' style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
                        <h3 className='planet-bar-heading-sec poppins-medium'>PROGRESS MADE</h3>
                    </div>

                    <div className="wrm-sec2-context2-imgs-row flex">
                        <img src="/planet-wrm-sec3-img1.png" alt="" />
                        <img src="/planet-wrm-sec3-img2.png" alt="" />


                    </div>

                    <div className="wrm-sec2-context2-imgs-row flex">
                        <img src="/planet-wrm-sec3-img1.png" alt="" />
                        <img src="/planet-wrm-sec3-img2.png" alt="" />


                    </div>

                    <div className='wrm-sec2-context2-row flex'>
                        <div className='planet-wrm-sec3-context-card flex'>
                            <img src="/planet-wrm-sec3-context-card-bar.png" alt="" />
                            <p>
                                Commenced rainwater harvesting initiatives with newly designed structures to harvest and recharge groundwater, resulting in <span>2%</span> of total water withdrawal sourced from rainwater.
                            </p>
                        </div>
                        <div className='planet-wrm-sec3-context-card flex'>
                            <img src="/planet-wrm-sec3-context-card-bar.png" alt="" />
                            <p>
                                Utilised <span>Aqueduct Water</span> risk atlas to map facilities and assess water risk index, revealing higher water risk in Indian facilities compared to international ones.
                            </p>
                        </div>
                    </div>
                    <div className='wrm-sec2-context2-row flex'>
                        <div className='planet-wrm-sec3-context-card flex'>
                            <img src="/planet-wrm-sec3-context-card-bar2.png" alt="" />
                            <p>
                                <span>Completed</span> Water Gap Assessment study in the reporting year to identify and address gaps in water management systems.
                            </p>
                        </div>
                        <div className='planet-wrm-sec3-context-card flex'>
                            <img src="/planet-wrm-sec3-context-card-bar2.png" alt="" />
                            <p>
                                Implemented <span>Waste-Water Treatment Plants</span> across most facilities, with treated water used for recycling purposes, such as gardening.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='planet-wrm-sec-context3'>

                    <img src="/small-square-btn.png" alt="" />
                    <h1>
                        WASTEWATER MANAGEMENT
                    </h1>
                    <h2>
                        We prioritize effective wastewater management resulting from our activities, with a focus on on-site treatment.
                    </h2>

                    <p>
                        Facilities equipped with Sewage Treatment Plants (STPs) play a crucial role in treating and repurposing wastewater for non-potable applications, ensuring the conservation of freshwater resources and preventing wastewater discharge into natural water bodies or land areas.
                    </p>

                    <p>
                        Our commitment to stringent compliance with all regulatory requirements underscores our dedication to responsible wastewater management practices. For facilities without STPs, wastewater is responsibly discharged into municipal systems, further aligning with our commitment to environmental stewardship.
                    </p>
                </div>
                <div className='wrm-sec2-context2'>
                <div className='bar-heading-parent' style={{ display: "flex", width: '100%', justifyContent: 'center' }}>
                        <h3 className='planet-bar-heading-sec poppins-medium'>PROGRESS MADE</h3>
                    </div>

                    <div className='wrm-sec3-wr-card-row flex'>
                        <img src="/wrm-sec3-wr-card1.png" alt="" />
                        <img src="/wrm-sec3-wr-card2.png" alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}
