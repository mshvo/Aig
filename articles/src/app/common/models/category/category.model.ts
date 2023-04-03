export class Category
{
  categoryID! : Number;
  categoryName! : string;
 
}

export class CategoryRes
{
  CategoryList! : Category[];
  Error: any;
} 