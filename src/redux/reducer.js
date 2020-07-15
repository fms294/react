import {CAMPSITES} from '../shared/campsites';
import {COMMENTS} from '../shared/comments';
import {PARTNERS} from '../shared/partners';
import {PROMOTIONS} from '../shared/promotions';

export const initialiState = {
    campsites:CAMPSITES,
    comments:COMMENTS,
    partners:PARTNERS,
    promotions: PROMOTIONS
};

export const Reducer =(state = initialiState, action) =>{
    return state;
};