import {CategoryRes} from  '../../common/models/category/category.model' 



export const TableDataCategories : CategoryRes =
{
 
    Error :  {'Msg' : 'good','ErrorCode' : '0' },

    CategoryList : 
            [     
                {
                    "categoryID": 1,
                    "categoryName":"general",
                    
                } ,
                {
                    "categoryID": 2,
                    "categoryName":"sports",
                }  ,
                {
                    "categoryID": 3,
                    "categoryName":"business",
                }  ,
                {
                    "categoryID": 4,
                    "categoryName":"nature",
                } ,
                {
                    "categoryID": 5,
                    "categoryName":"politics",
                }   
            ]

}
