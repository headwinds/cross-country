export default class PortholeBranchModel {
    constructor(
      id,
      tags,
      photoUrl,
      photoLargeUrl,
      images,
      link,
      publishedDate,
      branchTitleUnescape,
      feedLink,
      feedTitle,
      aboutUnescape,
      index,
      textUnescape,
      bUseText,
      x,
      y,
      bViewed,
      bTrashed
    ) {
      this.id = id
      this.tags = tags
      this.photoUrl = photoUrl
      this.photoLargeUrl = photoLargeUrl
      this.images = images
      this.link = link
      this.publishedDate = publishedDate
      this.title = branchTitleUnescape
      this.feedLink = feedLink
      this.feedTitle = feedTitle
      this.about = aboutUnescape
      this.index = index
      this.text = textUnescape
      this.useText = bUseText
      this.x = x
      this.y = y
      this.bViewed = bViewed
      this.bTrashed = bTrashed
      this.origin = 'porthole'
    }
  }
  