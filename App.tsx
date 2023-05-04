import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Manifesto: Empowering Muslims Through Technology and Community
      </Text>
      <Text>Introduction:</Text>
      <Text>
        We, the founders and supporters of our social enterprise, stand united
        in our commitment to empower Muslims around the world through innovative
        software solutions and an open-source society. We believe in the
        transformative power of technology and community to enhance the
        experiences of new and returning Muslims, strengthen the bonds of faith,
        and create a more connected and inclusive Muslim ummah.
      </Text>
      <Text>Our Vision:</Text>
      <Text>
        We envision a world where every Muslim, regardless of their background
        or location, can easily access enticing and highly communicative
        software tailored to their needs. Our software will inspire and educate
        new Muslims, provide support and guidance to returning Muslims, and
        foster a sense of unity and belonging within the Muslim community. In
        addition, we aim to establish an open-source society that provides small
        mosques with websites, tools, and resources to streamline their
        operations, enhance their communication, and foster community
        engagement.
      </Text>
      <Text>Our Mission:</Text>
      <Text>
        1. Creating Enticing and Highly Communicative Software: We are committed
        to developing cutting-edge software solutions that captivate and engage
        users. Our software will combine modern design, user-friendly
        interfaces, and intuitive functionalities to provide an immersive and
        personalized experience for new and returning Muslims. By leveraging the
        power of technology, we aim to make Islamic education and guidance
        easily accessible, enabling individuals to deepen their faith and
        strengthen their connection to Allah.
      </Text>
      <Text>
        2. Supporting New Muslims: We recognize the challenges faced by those
        who embark on the journey of embracing Islam. Our software will serve as
        a comprehensive resource, offering step-by-step guidance, curated
        content, and interactive features to facilitate learning, understanding,
        and integration into the Muslim community. We strive to be a source of
        comfort, support, and inspiration for new Muslims as they navigate their
        path towards embracing Islam.
      </Text>
      <Text>
        3. Assisting Returning Muslims: Many Muslims experience periods of
        disconnection from their faith due to various circumstances. Our
        software will cater to returning Muslims, providing them with a platform
        to reignite their spiritual journey, rediscover Islamic teachings, and
        find a sense of belonging within the community. We will offer
        personalized tools and resources to help returning Muslims rebuild their
        connection with Islam and foster a positive and lasting impact on their
        lives.
      </Text>
      <Text>
        4. Empowering Small Mosques through Open-Source Society: We believe that
        every mosque, regardless of its size or resources, should have access to
        effective digital platforms. Our open-source society will provide small
        mosques with websites that showcase their activities, manage prayer
        times, and offer tools for adding footnotes to sermons. We will also
        develop features to coordinate events and fundraisers, helping mosques
        strengthen community engagement, promote unity, and thrive as centers of
        Islamic learning and worship.
      </Text>
      <Text>
        5. Fostering Collaboration and Knowledge Sharing: We recognize the value
        of collaboration and knowledge sharing within the Muslim community. Our
        social enterprise will actively foster partnerships with scholars,
        educators, and community leaders to ensure the authenticity, accuracy,
        and relevance of the content we provide. We will create a space for
        individuals and organizations to contribute to our software and
        open-source society, ensuring continuous improvement and innovation.
      </Text>
      <Text>Conclusion:</Text>
      <Text>
        We are committed to harnessing the power of technology and community to
        empower Muslims worldwide. Through our enticing and highly communicative
        software, we aim to inspire, educate, and support new and returning
        Muslims on their spiritual journey. By establishing an open-source
        society, we strive to equip small mosques with the tools they need to
        enhance their communication, coordinate events, and strengthen their
        impact on the Muslim ummah. Together, let us embrace the opportunities
        presented by technology and build a connected, informed, and vibrant
        Muslim community for generations to come.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
