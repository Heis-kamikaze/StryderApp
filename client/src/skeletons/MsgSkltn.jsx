

const MsgSkltn = () => {
    return (
        <div>
            <div className="flex w-52 flex-col gap-4 my-10 mr-auto">
                <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full  bg-gray-500"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20 bg-gray-400"></div>
                        <div className="skeleton h-4 w-28 bg-gray-400"></div>
                    </div>
                </div>
            </div>

            <div className="flex w-52 flex-col gap-4 my-10 ml-auto">
                <div className="flex flex-row-reverse items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full  bg-gray-400"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20 bg-gray-500"></div>
                        <div className="skeleton h-4 w-28  bg-gray-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MsgSkltn;
