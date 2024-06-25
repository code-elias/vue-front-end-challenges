export class SocialLink {
  title: string
  url: string
  icon?: string

  // Overloaded constructors
  constructor(title: string, url: string)
  constructor(title: string, url: string, icon: string)

  constructor(title: string, url: string, icon?: string) {
    this.title = title
    this.url = url
    this.icon = icon
  }
}
