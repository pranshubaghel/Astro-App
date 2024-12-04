import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import EventIcon from '@mui/icons-material/Event'; // Example icon for date
import { NavLink } from 'react-router-dom';

// Array of event objects
const events = [
  {
    id: 1,
    image: 'https://www.astroved.com/us/wp-content/uploads/2024/06/Angali-Reading-fdsk.jpg',  // Replace with actual image URL
    title: '6-Month Goddess Angali Blessings Program',
    description: 'Our 6-Month Goddess Angali Blessings Program has been designed to help you experience a profound relationship with the Compassionate Miracle Goddess Angali through a powerful Channel, Angali Siddhar, who has been personally blessed by the Goddess and empowered by Dr. Pillai to communicate with her on your behalf for miracle blessings and to facilitate change in your life..',
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 2,
    image: 'https://www.astroved.com/us/wp-content/uploads/2020/10/Karuppaswamy-Reading-fdsk.jpg',  // Replace with actual image URL
    title: 'Karuppasamy Divine Reading Program',
    description: "Participate in our 3-Month Karuppaswamy Divine Reading Program and connect with the energy of the Swift-Acting Performer God Karuppaswamy through a gifted Karuppaswamy Channel personally chosen by Dr. Pillai to provide instant solutions to your problems, resolve your health, wealth, and relationship karma, and attain miracle boons to prosper and progress in life.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 3,
    image: 'https://www.astroved.com/us/wp-content/uploads/2019/01/ekadasi-kubera-homam-featured-dsk.jpg',  // Replace with actual image URL
    title: 'Boost Your Wealth Program',
    description: "1 Year of Grand Fire Labs For Wealth Archetypes Kubera & Lakshmi Hayagriva To help you invite money blessings and boost wealth in this New Year, Dr. Pillai is recommending an exclusive Grand Fire Labs for Wealth Archetypes Kubera and Lakshmi Hayagriva. AstroVed has created a yearlong wealth program of monthly Grand Fire Labs invoking wealth archetypes Kubera and Lakshmi Hayagriva for financial fortune, prosperity, and abundance blessings. These ceremonies will be performed on the most auspicious time- the Ekadasi (11th Waxing Moon), the 24-hour powertime filled with the energy to maximize material and spiritual gains.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 4,
    image: 'https://www.astroved.com/us/wp-content/uploads/2016/09/dkrp_feature.jpg',  // Replace with actual image URL
    title: 'Thiruvannamalai Arunachaleshwara Homa',
    description: "Thiruvannamalai Arunachaleshwara Homa Invoke the Purifying Grace of Lord Arunchaleshwara as Agni Jyothirlingam on Pournami Day At the sacred abode of Arunachala Hill (at Thiruvannamalai in South India), Lord Shiva is venerated as Arunachaleshwara, Lord of the Mountain of Light. He is sought after by humans, Devas, and Rishis for his infinite wisdom, compassion, guidance, and providence. He reigns here as the Master of the Universe, the Ultimate Remover of Afflictions and Suffering, and the Supreme Gateway to Salvation.Gloum astro will invoke Shiva as Arunachaleshwara on Pournami (Full Moon), with 17 Grand Ceremonies to help you receive his boundless grace and Divine blessings to uproot any form of negativity in your life, awaken your true potential, alleviate sorrow and suffering, and help you manifest your spiritual and material goals.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 5,
    image: 'https://www.astroved.com/us/wp-content/uploads/2016/06/tarpanam-ritual-package-featured-dsk.jpg',  // Replace with actual image URL
    title: 'Yearlong Tarpanam Program on Mahalaya Amavasya',
    description: "Special Tarpanam Rituals on Amavasya for Miracle BoonsTarpanam, a food offering to your ancestors, is the greatest act you can do to help liberate your ancestors and free your children from challenges created by negative ancestral influences.Gloum astro’s comprehensive 1-Year Tarpanam Program, with an exclusive package for Daily Tarpanam Rituals, aims to provide targeted, intensive help to liberate your ancestors so they can be your greatest benefactors and bless you and your children abundantly for good health, prosperity, abundance, and fulfilling relationships",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 6,
    image: 'https://www.astroved.com/us/wp-content/uploads/2016/03/birthday-ritual-packages-featured-dsk.jpg',  // Replace with actual image URL
    title: 'Gloum astro’s Special Birthday Rituals Packages',
    description: "12 Power Rituals to Remove Obstacles, Rejuvenate, & Realize Success This Birth Year    Your birthday is a special day that is meant exclusively for you. We have created an all-in-one package of powerful rituals as prescribed in ancient sacred texts to help you access the comprehensive blessings and life-transforming energy of Divine Archetypes to smash obstacles to success, empower your birth star energy within you, remove negative karma and boost your health, vitality and overall prosperity.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 7,
    image: 'https://www.astroved.com/us/wp-content/uploads/2016/09/AV-loyalty-porgram-fdsk.jpg',  // Replace with actual image URL
    title: 'New and Enhanced Gloum astro Loyalty Program- More Benefits Than Cost',
    description: "You Care for Gloum astro- We Care for You! We have enhanced our Gloum astro Loyalty Program to provide more benefits for you- cashback offers, and complimentary services, as well as sharing the blessings of Gloum astro Vedic technology services with your loved ones, discount coupon value equivalent to membership fees amount, and complimentary astrology readings.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 8,
    image: 'https://www.astroved.com/us/wp-content/uploads/2018/10/shirdi-baba-statue-installation-featured-dsk.jpg',  // Replace with actual image URL
    title: 'Donate for Ongoing Poojas: Invoke Shirdi Sai Baba’s Blessings for Miracles',
    description: "nvoke Blessings of 4 Sai Baba’s for Health, Protection, Money & Immediate Help To help people with everyday problems related to money and health, or any problem they face, Dr. Pillai personally named each of the four Shirdi Sai Baba statues and endowed the statue with a special power. We invite you to start your donation as a sponsor for the Shirdi Baba statue maintenance and have your name and birth star included in ongoing Poojas and Abishekams on Mondays and Thursdays to invoke the continual blessings and protection of Shirdi Baba.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 9,
    image: 'https://www.astroved.com/us/wp-content/uploads/2019/09/cow-feeding-program-featured-dsk.jpg',  // Replace with actual image URL
    title: 'Cow Feeding Program: Accessing Divine Blessings',
    description: "Feeding a Cow is Equivalent to Feeding 330 Million Gods Cows are considered the most sacred animals. According to Vedic texts, all celestial beings reside in a cow. Thus the holy act of feeding the cows is equivalent to feeding all the gods and goddesses. The scriptures say that it is very auspicious to feed a cow and it is one of the most sacred deeds to gain prosperity and happiness. Gloum astro has created a cow feeding Program to give you the opportunity to provide daily food and water for a cow on an ongoing basis invoke blessings for prosperity and happiness.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  {
    id: 10,
    image: 'https://www.astroved.com/us/wp-content/uploads/2017/09/cow-donation-featured-dsk.jpg',  // Replace with actual image URL
    title: 'Donate a Cow on Mahalaya Amavasya',
    description: "Most Compassionate Deed Confers Wealth and Well-Being Upon You & Your Successors Although there are several forms of donation, donating a cow is considered the most supreme and sacred of all donations one can do in a lifetime. According to ancient texts, donating a cow can liberate you and your ancestors from sins committed knowingly or unknowingly during one’s lifetime. As per sacred text Bhavishya Purana, ‘Gho Dhaana’ or cow donation is considered a pious act that can bestow all the benefits for a blessed life and also reserve a place for the giver in heaven after death.",
    buttonText: 'JOIN NOW',
    buttonColor: 'error',
    route: '/contact_us',
  },
  // Add more event objects (up to 10 as you want)
];

function YearlyPrograms() {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Title Section */}
      <Typography variant="h5" gutterBottom>
      Yearly-Programs
      </Typography>

      {/* Loop through the events array to display each event */}
      {events.map((event) => (
        <Grid container spacing={2} sx={{ marginBottom: '20px' }} key={event.id}>
          {/* Image Section */}
          <Grid item xs={12} sm={4}>
            <Card>
              <img
                src={event.image}
                alt={event.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Card>
          </Grid>
          {/* Content Section */}
          <Grid item xs={12} sm={8}>
            <Card>
              <CardContent>
               
                <Typography variant="h6" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
                <NavLink to={event.route} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color={event.buttonColor}>
                    {event.buttonText}
                  </Button>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default YearlyPrograms;