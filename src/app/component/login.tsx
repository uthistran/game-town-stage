const Login = () => {
    return (
        <section className="flex justify-end w-[90%] mt-[20px]">
                <div className="float-left font-['Arial'] text-center text-[13px] bg-grey rounded-[10px] w-[150px] h-[20px] leading-[20px] mt-[10px]">
                    Join the Jack Club
                </div>
                <div className="float-left text-[11px] mx-[20px]">
                    <div className="mb-[5px]">
                        <label>USER NAME</label>
                        <input type="text" className="p-0 w-[125px] rounded-[5px] ml-[10px]" />
                    </div>
                    <div>
                        <label>PASS WORD</label>
                        <input type="password" className="w-[125px] rounded-[5px] ml-[10px]" />
                    </div>

                </div>
                <div className="cursor-pointer float-left">
                    <div className="circle">
                        <div className="rect">LOG IN</div>
                    </div>
                </div>
            </section>
    )
}

export default Login;