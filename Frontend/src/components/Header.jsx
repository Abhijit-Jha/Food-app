import bannerImage from "../store/images/banner2.jpg"
export default function Header({Name,text1,text2}){
    return <div className="bg-center bg-no-repeat bg-cover shadow-md rounded-3xl" >
        <div className="flex justify-evenly p-20">
            <div className="font-bold text-4xl font-serif text-black">{Name}</div>
            <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-10 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input placeholder="Search for food...." className="w-96 rounded-xl p-1" autoFocus></input>
            </div>
            <div className="flex justify-end text-black">
            <div className="mr-5 cursor-pointer">{text1}</div>
            <div className="mr-5 cursor-pointer">{text2}</div>
            </div>
        </div>
    </div>
}