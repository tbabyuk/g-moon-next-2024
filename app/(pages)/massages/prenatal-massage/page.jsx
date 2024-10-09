import { PageHeader } from "../../components/PageHeader";
import { PageSubheader } from "../../components/PageSubheader";
import { PageSubSubheader } from "../../components/PageSubSubheader";


export const metadata = {
    title: "G Moon Wellness Centre | Prenatal Massage",
    description: "Experience the soothing benefits of our Prenatal Massage, designed specifically for expectant mothers to enhance comfort and relaxation during pregnancy."
}


const PrenatalMassagePage = () => {

    return(
        <main className="text-g-moon-dark-gray">
            <PageHeader title="Prenatal Massage" />
            <div className="g-moon-content-padding">
                <PageSubheader title="OVERVIEW" />
                <p className="mb-24">Experience the soothing benefits of our Prenatal Massage, designed specifically for expectant mothers to enhance comfort and relaxation during pregnancy. This gentle and nurturing treatment addresses the unique needs of pregnant women, providing relief from common pregnancy-related discomforts and promoting overall well-being.</p>
                <PageSubheader title="PRICING" />
                <div className="w-full max-w-[400px] mx-auto mb-24">
                    <table className="single-pricing-table">
                        <thead>
                            <tr className="bg-g-moon-gold text-g-moon-white">
                                <th>DURATION</th>
                                <th>PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>60 minutes</td>
                                <td>$60.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PageSubheader title="WHAT YOU GET" />
                <PageSubSubheader title="Safe and Comfortable Techniques" />
                <p className="g-moon-mb">Our therapists are trained in specialized techniques that ensure a safe and comfortable experience. Using pillows and supports, we tailor the massage to accommodate your growing belly and changing body, providing a position that offers maximum comfort.</p>
                <PageSubSubheader title="Relief from Pregnancy Discomforts" />
                <p className="g-moon-mb">Alleviate common pregnancy-related issues such as back pain, sciatica, and leg cramps. The massage helps to ease muscle tension, improve circulation, and reduce swelling, contributing to greater overall comfort.</p>
                <PageSubSubheader title="Stress Reduction" />
                <p className="g-moon-mb">Enjoy the calming effects of gentle, soothing strokes that help to reduce stress and anxiety. The relaxation provided by the massage supports emotional well-being and promotes a sense of calm.</p>
                <PageSubSubheader title="Improved Sleep Quality" />
                <p className="g-moon-mb">Experience enhanced relaxation and improved sleep quality. The Prenatal Massage helps to ease physical discomforts that can interfere with restful sleep, supporting better overall rest and relaxation.</p>
                <PageSubSubheader title="Enhanced Circulation" />
                <p className="g-moon-mb">The massage improves blood flow and lymphatic drainage, which can help to reduce swelling and support the body&apos;s natural processes during pregnancy.</p>
                <p className="font-semibold">Perfect for expectant mothers seeking comfort and relaxation, our Prenatal Massage offers a nurturing and supportive experience that enhances well-being and promotes a sense of tranquility throughout your pregnancy journey.</p>
            </div>
        </main>
    )
}


export default PrenatalMassagePage;