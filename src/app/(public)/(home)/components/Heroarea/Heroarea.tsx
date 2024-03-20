import { WordWrite } from "@/app/(public)/components/WordWrite"
import { XFactory } from "."


 

const Heroarea = () => {
  return (
    <div className="container">
        <div className="pt-6 md:pt-8">
        <WordWrite />
        </div>
        <div className="grid grid-cols-12 py-24 md:py-56">
            <div className="col-span-12 md:col-span-6 pb-6 md:pb-0" data-aos="fade-up">
            <XFactory />
            </div>
            <div className="col-span-12 md:col-span-6" data-aos="fade-up" data-aos-delay="1000">
                <p className="text-xl pr-8 md:pr-20 leading-10">X is a diverse group of inventors and entrepreneurs who build and launch technologies that aim to improve the lives of millions, even billions, of people. Our goal: 10x impact on the worlds most intractable problems, not just 10% improvement. We approach projects that have the aspiration and riskiness of research with the speed and ambition of a startup.
</p>
            </div>
        </div>
    </div>
  )
}

export default Heroarea