import * as React from 'react';
import ReactDOM from 'react-dom';
import Wireframe from './components/Wireframe';
import Trending from './components/Trending';
import Jumbotron from './components/Jumbotron';
import Advantages from './components/Advantages';

// Interfaces
/* eslint-disable-next-line no-unused-vars */
import { IDataInterface } from './interfaces/IDataInterface';

// Services
import { URLS, UrlService } from './Services/UrlService';

require('./bootstrap');

/*
 * This global variable comes from the page associated controller
 * and contains all necessary data for its view and the wireframe
 */
declare var data: IDataInterface;

export default class Home extends React.Component {
  private readonly urlService: UrlService;

  public constructor (props: {}) {
    super(props);
    this.urlService = new UrlService();
  }

  public render () {
    return (
      <Wireframe totalItemsCount={data.globalData.totalItemsCount} showPartnersCarousel={true} >
        <Jumbotron
          title="Teeworlds Skins"
          subtitle={'' +
          'Teeskins is a web-based Teeworlds Assets Database. We have a huge collection of graphics for every Teeworlds asset type. ' +
          'Download and Share Teeworlds Graphics with the Community!' +
          ''}
          showButton={true}
          buttonText={"Join Now"}
          buttonURL={this.urlService.mergeBaseWithURL(URLS.Register)}

        />
        <Advantages />
        <Trending
          mostDownloadedAsset={data.viewData.mostDownloadedAsset}
          mostLikedAsset={data.viewData.mostLikedAsset}
          newestAsset={data.viewData.newestAsset}
          userInfo={data.globalData.userInfo}
        />
      </Wireframe>
    );
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<Home />, document.getElementById('app'));
}
