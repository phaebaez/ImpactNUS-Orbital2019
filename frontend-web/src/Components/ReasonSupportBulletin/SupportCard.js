import React from 'react';
import { DateToString } from '../DateConverter/DateToString';

const SupportCard = ({ name, desc, reason, date, anonymity }) => (
    <article className="w-100 center mh4 mv3 br3 hidden ba b--black-10">
        <div className="bg-near-white br3 br--top black-60 mv0 pv2 ph3">
            <h4 className='f4 b'>
                {anonymity ? "Anonymous" : name}
            </h4>
            <p className='i'>{desc}</p>
        </div>
        <div className="pa3">
            <p className="f6 lh-copy">
                {reason}
            </p>
            <p className='i'>{DateToString(date)}</p>

        </div>
    </article>
);

export default SupportCard;