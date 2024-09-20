import { array } from "../../Utils/Constants/img";
const Skills = () => {

    let style = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "10px",
        margin: '0 auto',
    }

    return (
        <>
            <div className="text-center p-4 m-4">
                <h1 className="text-4xl">
                    My <span className="font-bold">Skills</span>
                </h1>
                <div className="flex flex-wrap justify-center">
                    {array.map((item, index) => {
                        return (
                            <>
                                <div>
                                    <div key={index} className="items-center hover:underline p-4 h-36" style={style}>
                                        <div className="border-2 border-black h-36 w-32 flex flex-col justify-center">
                                            <img src={item.imgSrc} style={style} className='w-12 p-1' alt="" />
                                            <span>{item.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills