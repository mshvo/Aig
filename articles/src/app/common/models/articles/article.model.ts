export class Article
{
  articleID! : number;
  title! : string;
  description!:string;
  image!:string;
  categoryID!:number;
}

export class ArticlesRes
{
  ArticleList! : Article[];
  Error: any;
} 