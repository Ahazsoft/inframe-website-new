import React from "react";
import Image from "next/image";
// images
import location_1 from "@/assets/img/inner-contact/contact/info-1.jpg";
import location_2 from "@/assets/img/inner-contact/contact/info-2.jpg";
import location_3 from "@/assets/img/inner-contact/contact/info-3.jpg";
import Link from "next/link";

// data
const location_data = [
  {
    id: 1,
    img: location_1,
    country: "Ethiopia",
    time: "12:00 pm GMT+2",
    location_title: "Base Create",
    address: "Bole SubCity, Addis Ababa <br /> Ethiopia",
    phone1: "(+251) 923002831",
    phone2: "(+251) 926724885",
    phone3: "(+251) 970222223",
    email: "info@inframeadvertising.com",
  },
  // {
  //   id: 2,
  //   img: location_2,
  //   country: "Germany",
  //   time: "11:00 pm GMT+2",
  //   location_title: "Base Create",
  //   address: "Base Creative, 43 Appleton <br /> Lane, 3287 Hamilton",
  //   phone: "(+91) 76001726",
  //   email: "Hello@contact.com",
  // },
  // {
  //   id: 3,
  //   img: location_3,
  //   country: "New Zealand",
  //   time: "10:00 pm GMT+2",
  //   location_title: "Base Create",
  //   address: "Base Creative, 43 Appleton <br /> Lane, 3287 Hamilton",
  //   phone: "(+91) 76001726",
  //   email: "Hello@contact.com",
  // },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    {/* <div className="cn-contact-info-thumb">
                      <Image src={item.img} alt="image" style={{ height: "auto" }} />
                    </div> */}
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      {/* <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <Link
                          href="#"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></Link>
                      </div>
                      <div className="cn-contact-map">
                        <Link href="https://maps.app.goo.gl/mtTrKxseKiSdQjsAA">Google Maps</Link>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <Link href="tel:0923002831">{item.phone1}</Link> <br />
                      <Link href="tel:0926724885">{item.phone2}</Link> <br />
                      <Link href="tel:0970222223">{item.phone3}</Link> <br />
                      <Link href="mailto:info@inframeadvertising.com">{item.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
