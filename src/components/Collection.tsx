import React from 'react';
import './Collection.scss';
import { ICollection } from '../models/ICollection';

export const Collection = (props: { collection: ICollection, index: number }) => <div className="collection">
    <div className="flex-1 p-6 max-w-sm mx-auto mb-10 bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
            <div className="text-xl font-medium text-black">{props.collection.metadata.name}</div>
            <p className="text-gray-500 text-sm">{props.collection.metadata.description}</p>
            <span className='text-sm cursor-pointer' onClick={() => window.location.replace(`${window.location.origin}/design/${props.index}`)}>EDIT</span>
        </div>
    </div>
</div>
