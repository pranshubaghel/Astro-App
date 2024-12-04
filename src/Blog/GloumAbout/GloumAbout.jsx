import { Button, Container, Typography, Box } from '@mui/material';
import React, { useState, useRef } from 'react';

const GloumAbout = () => {
    const [showHoroscope, setShowHoroscope] = useState(false);
    const horoscopeRef = useRef(null);

    const handleReadMoreClick = () => {
        setShowHoroscope(true);
        setTimeout(() => {

            if (horoscopeRef.current) {
                horoscopeRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <>
            <Container sx={{ width: "100%", paddingBottom: '2rem' }}>
                <Typography variant="h5" sx={{ marginTop: "1rem", fontWeight: "600" }}>Astrology with  Best Astrologer </Typography>

                <Typography variant="body1" sx={{ color: "#919191" }}>
                    Astrology evolved as a reliable predictive science based on the realization that celestial objects strongly influence people's lives. Studying these heavenly bodies can reveal a lot about human beings, their characteristics, fortunes, and future. To understand and perfect this science, it took India's yogis and Siddhas years of meticulous observation of the positioning and movements of the cosmic entities like the stars and planets and linking them with the events of the world and the people's fortunes. Thus evolved the highly dependable and widely followed forecasting system of astrology.
                </Typography>

               
                {!showHoroscope && (
                    <Button
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}
                        onClick={handleReadMoreClick}
                    >
                        Read more
                    </Button>
                )}
                {showHoroscope && (
                    <Box
                        ref={horoscopeRef} // Attach ref to the Box
                        sx={{ width: "100%", marginTop: "1rem", paddingBottom: '2rem' }}
                    >
                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>Horoscope</Typography>

                        <Typography sx={{ color: "#919191" }}>
                            Astrology operates on the principle that the positioning of the planets at the time of birth of a person virtually decides the course of their lives and fortunes. Hence, these planets were plotted accordingly in a uniquely designed chart known as the natal chart, birth chart, or <span style={{ color: "blue", opacity: "0.8" }}>horoscope</span> . The natural zodiac comprises 12 signs, known as the zodiac signs, and is represented by the 12 sections of the horoscope. The planets as found placed in the sky at the birth time are plotted in these sections, known as the Houses, and it is this horoscope, the replica of the celestial map at the time of birth, which is analyzed to make predictions about the person concerned.
                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>Planets and Houses</Typography>

                        <Typography sx={{ color: "#919191" }}>
                            According to the ancient Vedic Astrology system, there are nine planets, the Grahas, which include the self-luminary Sun, around which all the planets rotate but exclude our mother earth. These nine planets, which hold such strong sway over the people's lives, are much revered as Navagrahas. These are Surya, the Sun; Chandra, the Moon; Mangala or Chevvai, Mars; Budha, Mercury; Brihaspati or Guru, Jupiter; Shukra, Venus; Shani, Saturn, Rahu, and Ketu.<br /><br />

                            Unlike other planets, Rahu and Ketu do not have physical existence and hence are known as Chaya Graha, the shadow planets. They only represent the points of intersection of the orbits of the Sun and the Moon, where Rahu denotes the Northern node of the Moon and Ketu, the Southern node.<br /><br />

                            Some of these nine planets are regarded as auspicious or benefic, while others are inauspicious or malefic. While Mercury, Jupiter, Venus, and the waxing Moon are held auspicious, the Sun, Mars, Saturn, Rahu, Ketu, and the waning Moon are considered otherwise.<br /><br />

                            The 12 horoscopic Houses, too, have their significance. The first House, called the Lagna or the Ascendant, is perhaps the most crucial and represents an individual's personality and physical features. Similarly, each of the other Houses, too, stands for a significant aspect of life.
                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>Astrological Predictions</Typography>

                        <Typography sx={{ color: "#919191" }}>
                            Which planet is present in which House? Which planet is in conjunction with which other planet and where? Which planet casts its aspect on what House? What are the qualities of the planets placed in the various Houses? And what areas of life do those Houses represent? – All these form part of the horoscope reading or analysis and forecasting about a person and their future.
                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>Online Astrology Services</Typography>

                        <Typography sx={{ color: "#919191" }}>
                            Times have changed, making lives fast-paced, when livelihood issues have begun casting heavy demands on the people and their time. While their faith in astrology remains as strong as ever, they started finding it difficult to do astrology consultations conventionally, taking much time and trouble traveling long distances through the traffic to visit astrologers, wait for their turn, and hold elaborate discussions.<br /><br />

                            However, technology has come to their rescue in the form of online astrology, helping people save precious time, trouble, and even money, but still receive all the benefits that astrology offers. Gloum astro, pioneer in offering these services online has grown to great heights in using the facility of online astrology to help deliver the wisdom contained in the ancient Vedic astrology to people's doorsteps.
                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: "1rem" }}> Gloum Astro  Online Services</Typography>
                        <Typography sx={{ color: "#919191" }}>
                             Astro has developed into an unenviable brand thanks to its reputation built painstakingly over the years for offering purposeful astrological consultations and credible remedial solutions, especially through the online medium. Thanks to a dedicated community of experts and experienced astrologers available in its ranks, Gloum Astro is bringing a range of astrological services to the relief and benefit of the people.<br /><br />
                            These include Astrology Consultations, Drafting Horoscopes (Making Horoscopes), Matching Horoscopes for Marriage, Astrology Reports, Planetary Transit Reports, Prasna (Horary) Astrology, <span style={{ color: "blue", opacity: "0.8" }}>Nadi Astrology</span> , Astrology Training, and Priest Services. They also suggest solutions in the form of remedies, rituals, and worships.
                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>Online Astrologers</Typography>
                        <Typography sx={{ color: "#919191" }}>
                            It is no exaggeration to say that the online astrological system owes its success almost entirely to <span style={{ color: "blue", opacity: "0.8" }}>online astrologers</span>. However, it is the ease with which they accepted the technological advancement into this ancient system and their own seamless adaptation to the new norm that has made astrology as relevant to modern times and the tech-savvy youngsters as to the earlier ones and the older generation.<br /><br />
                            We at  Astro, owe our success to our dedicated band of online astrologers. We have taken great pains in recruiting these astrology specialists after a thorough induction process consisting of many stages of careful screening by our panel of experts. We have also nurtured them carefully to keep updating their knowledge, improving on their expertise, and gaining by their experience.<br /><br />

                            With customers from different nationalities, cultures, and backgrounds and spread across the world, our astrologers strive to cater to their varied expectations, needs, and demands to their entire satisfaction. They have been trained to listen to the customers' difficulties with fellow-feeling, understand their concerns with empathy, foresee what the future holds for them through astrological analysis, and advise them accordingly. They will be honest in their predictions and convey in a manner acceptable to customers.<br /><br />

                            They highlight the positive aspects even in grim scenarios and suggest solutions to overcome the problems. The solutions to reducing adverse effects through divine interventions include <span style={{ color: "blue", opacity: "0.8" }}>astrological remedies</span>, simple rituals, visits to temples, and efficacious worships.
                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>Astrological Website</Typography>

                        <Typography sx={{ color: "#919191" }}>
                         Astro website also offers regular services like the Daily horoscopes given Moon Sign wise, Today's Panchang, the Star Guidance of the Day, Monthly and Yearly Predictions, and all these for free. In addition, there are also <span style={{ color: "blue", opacity: "0.8" }}>Astrology Blogs</span>  highlighting the astrological significance of important events or happenings, Newsletters on festivals or sacred occasions, and highly informative articles on religious and spiritual subjects.<br /><br />
                            This site can help customers learn about the quality of the days ahead, identify auspicious dates for undertaking important tasks, starting new activities, or planning auspicious events. They can also know the good and not-so-good timings of any day and accordingly do or refrain from going ahead with any activity of significance.<br /><br />

                            Further, many celestial events like transits of planets and solar and lunar eclipses do keep happening. By referring to the Gloum Astro website, people can be aware of their dates and timings, what these may augur for them, and what ceremonies or remedies they may have to perform for their relief or benefits then.<br /><br />

                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>Why astro?</Typography>

                        <Typography sx={{ color: "#919191" }}>
                             Astro has touched over 60 million lives, kindled hopes, and brought cheers to countless families and individuals around the globe through our dedicated, personalized services. Our reputed astrologers with immense expertise and vast experience can recommend authentic Vedic astrological solutions. They approach with full understanding and empathy. Complete privacy guaranteed. They can also suggest solutions through "Pariharams," the Remedy Services.<br /><br />
                            With establishments in countries including the USA, UK, Canada, Australia, and Malaysia, and many cities in India like Chennai, Delhi, Mumbai, Hyderabad, and Bangalore, Gloum astro has in its panel of the best astrologers available in the field. Members also can pick the astrologer of their choice, going by their reviews and ratings available on our online platform.<br /><br />

                        </Typography>

                        <Typography variant="h6" sx={{ marginTop: "1rem" }}>astro – Astrology & Remedies</Typography>

                        <Typography sx={{ color: "#919191" }}>
                            <span style={{ color: "blue", opacity: "0.8" }}> astro – Astrology & Remedies </span> is also there for the Gloum astro members/users to download in their Android/iPhone mobile phones and use. This easy-to-use application can empower people every day and help them understand and organize their lives. This personalized, location-based application can be your one-stop shopping destination for all life-transforming tools.<br /><br />
                            Keeping with the present trends and consumer requirements, this App also contains many attractive features that can give people a memorable experience of enjoying and benefitting from our immensely propitious services.<br /><br />

                        </Typography>
                    </Box>
                )}
            </Container>
        </>
    );
}

export default GloumAbout;
