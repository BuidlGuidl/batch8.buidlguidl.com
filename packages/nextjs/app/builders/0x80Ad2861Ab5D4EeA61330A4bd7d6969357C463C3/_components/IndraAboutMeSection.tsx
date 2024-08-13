const IndraAboutMeSection = () => {
  return (
    <section className="container mx-auto space-y-2">
      <h2 className="text-2xl font-semibold mb-2 ">About Me</h2>
      <p className="text-sm md:text-base">
        {`I'm a front-end engineer 🧑‍💻 with full-stack prowess 💪`} <br className="block md:hidden" />
        {`I love to build products that are useful and delightful to use.`} <br className="block md:hidden" />
        {`I'm a big fan of the Ethereum ecosystem and am interested in buidling on the blockchain tech.`}
      </p>
    </section>
  );
};

export default IndraAboutMeSection;
