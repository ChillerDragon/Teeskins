/* eslint-disable no-unused-vars */

export class UtilsService {
  public getMetaTagValue (name: string) {
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === name) {
        return metas[i].getAttribute('content');
      }
    }

    return '';
  }
}
