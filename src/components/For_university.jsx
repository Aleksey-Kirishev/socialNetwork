/*
import React from "react";
class ForUniversity extends React.Component{
    render() {
        return ( <div>
        //функция для поиска линейного эл-ов кратных двум
        const Search = (props) => {
            const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
            const linear = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0)
                        console.log(`Found: ${arr[i]}`);
                }
            };
            return console.log(linear(sortedArr));
        };
//--------------------------------------------------
//--------------------------------------------------
        const SearchToTheBeginningOFTheArray = () => {
            const newArr = [1, 16, 8, 10, 18, 5, 6];
            const linearBeginning = (array) => {
                for (let i = 1; i < array.length - 1; i++) {
                    if ((array[i - 1] - array[i + 1]) % 2 === 0 && (array[i - 1] - array[i + 1]) % 3 === 0) {
                        console.log(`${array[i]}`)
                        for (let a = i; a > 0; a--) {
                            let temp = array[a];
                            array[a] = array[a - 1];
                            array[a - 1] = temp;
                        }
                    }
                }
                console.log(`-------`)
                console.log(`ARRAY IS DONE:`)
                for (let i = 0; i < array.length; i++) {
                    console.log(`${array[i]}`)
                }
            };
            return console.log(linearBeginning(newArr));
        };

        const anotherSearch = () => {
            const newArr1 = [1, 16, 8, 10, 18, 5, 6];
            const anotherQQQSearch = (array) => {
                for (let i = 1; i < array.length - 1; i++) {
                    if ((array[i - 1] - array[i + 1]) % 2 === 0 && (array[i - 1] - array[i + 1]) % 3 === 0) {
                        console.log(`${array[i]}`)
                        for (let a = i; a > 0; a--) {
                            let temp = array[a];
                            array[a] = array[a - 1];
                            array[a - 1] = temp;
                        }
                    }
                }
                console.log(`-------`)
                console.log(`ARRAY IS DONE:`)
                for (let i = 0; i < array.length; i++) {
                    console.log(`${array[i]}`)
                }
            };
            return console.log(anotherQQQSearch(newArr1));
        };
//-----------------------------------------------------
            </div>
            )}
}

export default ForUniversity;*/



//закинуть в пропсы Нужной компоненты
/*Search={Search} anotherSearch={anotherSearch} SearchToTheBeginningOFTheArray={SearchToTheBeginningOFTheArray}*/
//закинуть в ту же компоненту
// <button onClick={props.Search}>Usual Search</button>
// <button onClick={props.SearchToTheBeginningOFTheArray}>Search With push to the begin</button>