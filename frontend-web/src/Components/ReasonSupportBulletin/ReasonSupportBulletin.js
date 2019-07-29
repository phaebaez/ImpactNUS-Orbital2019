import React from 'react';
import SupportCard from './SupportCard';
import './ReasonSupportBulletin.css';
import EmptySupportSegment from '../EmptyFillers/EmptySupportSegment';

const ReasonSupportBulletin = ({ reasonData }) => {
    console.log("Reason data", reasonData);
    if (reasonData.length === 0) {
        return (
            <EmptySupportSegment />
        );
    }

    else {
        return (
            <div>
                <div id='RSB' className=''>
                    {reasonData.slice(0, 8).map((data) => { //8 is the maximum number to be displayed
                        return <SupportCard name={data.name} desc={data.poster_description} reason={data.content} date={data.dateposted} anonymity={data.anonymity} />
                    })}
                </div>
                {/* <button className="landing-button">See All</button> */}
            </div>

        );
    }

};

export default ReasonSupportBulletin;