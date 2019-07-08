import * as React from 'react';
import Skin from './Skin';
import { NewestAsset } from "../interfaces/ITrendingInterface";
import { IUserInfoInterface } from './../interfaces/IUserInfoInterface';

interface INewestProps {
    newestAsset: NewestAsset;
    userInfo: IUserInfoInterface;
}

export default class Newest extends React.Component<INewestProps> {
    render(){
        return(
            <>
                <h3 className="headline">newest</h3>
                <p className="value">
                    {this.props.newestAsset.uploadDate}
                </p>
                <Skin
                    id={this.props.newestAsset.id}
                    name={this.props.newestAsset.name}
                    author={this.props.newestAsset.author}
                    imagePath={this.props.newestAsset.imagePath}
                    uploadDate={this.props.newestAsset.uploadDate}
                    userInfo={this.props.userInfo}
                />
            </>
        );
    }
}