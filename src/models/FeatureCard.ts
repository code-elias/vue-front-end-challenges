export class FeatureCard {
  Title: string
  Body: string
  BorderColor: string
  Icon: string

  constructor(title: string, body: string, borderColor: string, icon: string) {
    this.Title = title
    this.Body = body
    this.BorderColor = borderColor
    this.Icon = icon
  }
}
