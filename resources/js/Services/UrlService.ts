/* eslint-disable no-unused-vars */

export enum URLS {
    Home = '/',
    Login = '/login',
    Register = '/register',
    Upload = '/upload',

    Skins = '/asset/skins',
    SkinsDownloads = '/asset/skins/downloads',
    SkinsLikes = '/asset/skins/likes',

    Body = '/asset/body',
    BodyDownloads = '/asset/body/downloads',
    BodyLikes = '/asset/body/likes',

    Decoration = '/asset/decoration',
    DecorationDownloads = '/asset/decoration/downloads',
    DecorationLikes = '/asset/decoration/likes',

    Eyes = '/asset/eyes',
    EyesDownloads = '/asset/eyes/downloads',
    EyesLikes = '/asset/eyes/likes',

    Feet = '/asset/feet',
    FeetDownloads = '/asset/feet/downloads',
    FeetLikes = '/asset/feet/likes',

    Hands = '/asset/hands',
    HandsDownloads = '/asset/hands/downloads',
    HandsLikes = '/asset/hands/likes',

    Marking = '/asset/marking',
    MarkingDownloads = '/asset/marking/downloads',
    MarkingLikes = '/asset/marking/likes',

    Mapres = '/asset/mapres',
    MapresDownloads = '/asset/mapres/downloads',
    MapresLikes = '/asset/mapres/likes',

    Gameskins = '/asset/gameskins',
    GameskinsDownloads = '/asset/gameskins/downloads',
    GameskinsLikes = '/asset/gameskins/likes',

    Emoticons = '/asset/emoticons',
    EmoticonsDownloads = '/asset/emoticons/downloads',
    EmoticonsLikes = '/asset/emoticons/likes',

    Cursors = '/asset/cursors',
    CursorsDownloads = '/asset/cursors/downloads',
    CursorsLikes = '/asset/cursors/likes',

    Particles = '/asset/particles',
    ParticlesDownloads = '/asset/particles/downloads',
    ParticlesLikes = '/asset/particles/likes',

    Grids = '/asset/grids',
    GridsDownloads = '/asset/grids/downloads',
    GridsLikes = '/asset/grids/likes',

    SkinRenderer = '/skinrenderer',
    BodyRenderer = '/bodyrenderer',

    Search = '/search',

    PrivacyPolicies = '/privacy-policies',
    TermsOfUse = '/terms-of-use',

    API = '/api',
    APISkins = '/api/skins',
    APIBody = '/api/body',
    APIDecoration = '/api/decoration',
    APIEyes = '/api/eyes',
    APIFeet = '/api/feet',
    APIHands = '/api/hands',
    APIMarking = '/api/marking',
    APIMapres = '/api/mapres',
    APIGameskins = '/api/gameskins',
    APIEmoticons = '/api/emoticons',
    APICursors = '/api/cursors',
    APIParticles = '/api/particles',
    APIGrids = '/api/grids',

    Dashboard = '/userpanel/dashboard',
    DashboardDownloads = '/userpanel/dashboard/downloads',
    DashboardLikes = '/userpanel/dashboard/likes',
    Settings = '/userpanel/settings',

    UserList = '/adminpanel/userlist',
    Reports = '/adminpanel/reports',

    SkinUploads = '/adminpanel/uploads/skins',
    SkinUploadsDownload = '/adminpanel/uploads/skins/downloads',
    SkinUploadsLikes = '/adminpanel/uploads/skins/likes',

    BodyUploads = '/adminpanel/uploads/body',
    BodyUploadsDownload = '/adminpanel/uploads/body/downloads',
    BodyUploadsLikes = '/adminpanel/uploads/body/likes',

    DecorationUploads = '/adminpanel/uploads/decoration',
    DecorationUploadsDownload = '/adminpanel/uploads/decoration/downloads',
    DecorationUploadsLikes = '/adminpanel/uploads/decoration/likes',

    EyesUploads = '/adminpanel/uploads/eyes',
    EyesUploadsDownload = '/adminpanel/uploads/eyes/downloads',
    EyesUploadsLikes = '/adminpanel/uploads/eyes/likes',

    FeetUploads = '/adminpanel/uploads/feet',
    FeetUploadsDownload = '/adminpanel/uploads/feet/downloads',
    FeetUploadsLikes = '/adminpanel/uploads/feet/likes',

    HandsUploads = '/adminpanel/uploads/hands',
    HandsUploadsDownload = '/adminpanel/uploads/hands/downloads',
    HandsUploadsLikes = '/adminpanel/uploads/hands/likes',

    MarkingUploads = '/adminpanel/uploads/marking',
    MarkingUploadsDownload = '/adminpanel/uploads/marking/downloads',
    MarkingUploadsLikes = '/adminpanel/uploads/marking/likes',

    MapresUploads = '/adminpanel/uploads/mapres',
    MapresUploadsDownload = '/adminpanel/uploads/mapres/downloads',
    MapresUploadsLikes = '/adminpanel/uploads/mapres/likes',

    GameskinsUploads = '/adminpanel/uploads/gameskins',
    GameskinsUploadsDownload = '/adminpanel/uploads/gameskins/downloads',
    GameskinsUploadsLikes = '/adminpanel/uploads/gameskins/likes',

    EmoticonsUploads = '/adminpanel/uploads/emoticons',
    EmoticonsUploadsDownload = '/adminpanel/uploads/emoticons/downloads',
    EmoticonsUploadsLikes = '/adminpanel/uploads/emoticons/likes',

    CursorsUploads = '/adminpanel/uploads/cursors',
    CursorsUploadsDownload = '/adminpanel/uploads/cursors/downloads',
    CursorsUploadsLikes = '/adminpanel/uploads/cursors/likes',

    ParticlesUploads = '/adminpanel/uploads/particles',
    ParticlesUploadsDownload = '/adminpanel/uploads/particles/downloads',
    ParticlesUploadsLikes = '/adminpanel/uploads/particles/likes',

    GridsUploads = '/adminpanel/uploads/grids',
    GridsUploadsDownload = '/adminpanel/uploads/grids/downloads',
    GridsUploadsLikes = '/adminpanel/uploads/grids/likes',

    FetchSearch = '/fetch/search',

    FetchSkins = '/fetch/asset/skins',
    FetchBody = '/fetch/asset/body',
    FetchDecoration = '/fetch/asset/decoration',
    FetchEyes = '/fetch/asset/eyes',
    FetchFeet = '/fetch/asset/feet',
    FetchHands = '/fetch/asset/hands',
    FetchMarking = '/fetch/asset/marking',
    FetchMapres = '/fetch/asset/mapres',
    FetchGameskins = '/fetch/asset/gameskins',
    FetchEmoticons = '/fetch/asset/emoticons',
    FetchCursors = '/fetch/asset/cursors',
    FetchParticles = '/fetch/asset/particles',
    FetchGrids = '/fetch/asset/grids',

    FetchUserUploads = '/fetch/userUploads',

    FetchSkinUploads = '/fetch/asset/unverified/skins',
    FetchBodyUploads = '/fetch/asset/unverified/body',
    FetchDecorationUploads = '/fetch/asset/unverified/decoration',
    FetchEyesUploads = '/fetch/asset/unverified/eyes',
    FetchFeetUploads = '/fetch/asset/unverified/feet',
    FetchHandsUploads = '/fetch/asset/unverified/hands',
    FetchMarkingUploads = '/fetch/asset/unverified/marking',
    FetchMapresUploads = '/fetch/asset/unverified/mapres',
    FetchGameskinsUploads = '/fetch/asset/unverified/gameskins',
    FetchEmoticonsUploads = '/fetch/asset/unverified/emoticons',
    FetchCursorsUploads = '/fetch/asset/unverified/cursors',
    FetchParticlesUploads = '/fetch/asset/unverified/particles',
    FetchGridsUploads = '/fetch/asset/unverified/grids',
}

export class UrlService {
  public getBaseURL () {
    const url = window.location;
    return url.protocol + '//' + url.host;
  }

  public getUrlPath () {
    const url = window.location.href;
    const startChar = url.indexOf('/', 8);
    return url.substr(startChar, url.length);
  }

  public navIsActive (naviPath) {
      if (this.getUrlPath() === naviPath) {
        return 'active';
      }

      return '';
  }

  public mergeBaseWithPathURL (path) {
    return this.getBaseURL() + path;
  }

  public mergeBaseWithURL (url: URLS) {
    return this.getBaseURL() + url;
  }

  public redirectToPageURL (url: URLS) {
    window.location.href = this.getBaseURL() + url;
  }

  public redirectToPagePath (path) {
    window.location.href = this.mergeBaseWithPathURL(path);
  }

  public redirectToAbsoluteURL (url: string) {
    window.location.replace(url);
  }
}
