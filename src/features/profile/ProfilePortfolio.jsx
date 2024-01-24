import Title from "../../shared/Title"
import Dots from "../../assets/icons/Dots"
import FacebookLogo from "../../assets/icons/FacebookLogo"
import DribLogo from "../../assets/icons/DribLogo"
import LinkedinLogo from "../../assets/icons/LinkedinLogo"
import YoutubeLogo from "../../assets/icons/YoutubeLogo"

function ProfilePortfolio() {
    return (
        <div className="rounded-[20px] bg-white p-[30px_28px_34px] flex-1">
           <div className="flex justify-between">
            <Title>Portofolios</Title>
            <div>
                <Dots />
            </div>
           </div>
           <div className="mt-5 flex flex-col gap-6">
            <div className="flex items-center gap-5 rounded-[18px] bg-gray-50">
                <div className="rounded-2xl bg-[#3D6AD6] w-[50px] h-[50px] grid place-content-center" >
                    <FacebookLogo />
                </div>
                <a href="" className="text-base font-medium">/davidheree.porto</a>
            </div>
            <div className="flex items-center gap-5 rounded-[18px] bg-gray-50">
                <div className="rounded-2xl bg-[#EA518D] w-[50px] h-[50px] grid place-content-center" >
                    <DribLogo />
                </div>
                <a href="" className="text-base font-medium">/david.drib</a>
            </div>
            <div className="flex items-center gap-5 rounded-[18px] bg-gray-50">
                <div className="rounded-2xl bg-[#0073B1] w-[50px] h-[50px] grid place-content-center" >
                    <LinkedinLogo />
                </div>
                <a href="" className="text-base font-medium">/davidheree222</a>
            </div>
            <div className="flex items-center gap-5 rounded-[18px] bg-gray-50">
                <div className="rounded-2xl bg-[#FF0000] w-[50px] h-[50px] grid place-content-center" >
                    <YoutubeLogo />
                </div>
                <a href="" className="text-base font-medium">/davidhereechan</a>
            </div>

           </div>
        </div>
    )
}

export default ProfilePortfolio
