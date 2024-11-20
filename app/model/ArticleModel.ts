export interface ArticleModel {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _type: string;
    title: string;
    teaser: string;
    articleSlug: string | '';
    image: {};
    caption: string;
    body: any[];
}