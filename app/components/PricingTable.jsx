



export const PricingTable = () => {

    return(
        <>
            <table className="pricing-table">
                <thead>
                    <tr className="bg-g-moon-gold text-g-moon-white">
                        <th className="py-2">MASSAGES</th>
                        <th>30 mins</th>
                        <th>45 mins</th>
                        <th>60 mins</th>
                        <th>90 mins</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-[150px] md:w-[210px]">Swedish Massage</td>
                        <td>$40</td>
                        <td>$50</td>
                        <td>$60*</td>
                        <td>$90</td>
                    </tr>
                    <tr>
                        <td>Deep Tissue Massage</td>
                        <td>$40</td>
                        <td>$50</td>
                        <td>$60*</td>
                        <td>$90</td>
                    </tr>
                    <tr>
                        <td>Shiatsu Massage</td>
                        <td>$40</td>
                        <td>$50</td>
                        <td>$60*</td>
                        <td>$90</td>
                    </tr>
                    <tr>
                        <td>Thai Massage</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>$80*</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Couples Massage</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>$160*</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Prenatal Massage</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>$60*</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Postnatal Massage</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>$60*</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Scalp Massage</td>
                        <td>$40</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Face Massage</td>
                        <td>$40</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                    </tr>
                </tbody>
            </table>
            <div className="font-semibold text-gray-500 mt-4 mb-12 text-sm text-center md:text-end">*Rates might be different depending on the therapist</div>
            <table className="pricing-table mb-12">
                <thead>
                    <tr className="bg-g-moon-gold text-g-moon-white">
                        <th className="py-2">BODY SCRUBS</th>
                        <th>30 mins</th>
                        <th>45 mins</th>
                        <th>60 mins</th>
                        <th>90 mins</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td className="w-[150px] md:w-[210px]">Sugar Scrub</td>
                        <td>$60</td>
                        <td>n/a</td>
                        <td>$80</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Sea Salt Scrub</td>
                        <td>$60</td>
                        <td>n/a</td>
                        <td>$80</td>
                        <td>n/a</td>
                    </tr>

                    <tr>
                        <td>Coffee Scrub</td>
                        <td>$60</td>
                        <td>n/a</td>
                        <td>$80</td>
                        <td>n/a</td>
                    </tr>
                </tbody>
            </table>
            <table className="pricing-table">
                <thead>
                    <tr className="bg-g-moon-gold text-g-moon-white">
                        <th className="py-2">OTHER SERVICES</th>
                        <th>30 mins</th>
                        <th>45 mins</th>
                        <th>60 mins</th>
                        <th>90 mins</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-[150px] md:w-[210px]">Aromatherapy</td>
                        <td>$50</td>
                        <td>$60</td>
                        <td>$70</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Reflexology</td>
                        <td>$40</td>
                        <td>$50</td>
                        <td>$60</td>
                        <td>$90</td>
                    </tr>
                    <tr>
                        <td>Hot Stone Therapy</td>
                        <td>$40</td>
                        <td>n/a</td>
                        <td>$70</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Table Shower</td>
                        <td>$60</td>
                        <td>n/a</td>
                        <td>$80</td>
                        <td>n/a</td>
                    </tr>
                    <tr>
                        <td>Consultation</td>
                        <td>$60</td>
                        <td>$80</td>
                        <td>$100</td>
                        <td>n/a</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}