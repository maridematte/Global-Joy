<template>
  <div className="NewUser">
    <form action="">
      <fieldset>
        <legend>PERSONAL INFO</legend>
          First Name
          <input type="text" name="firstname" />
          Last Name
          <input type="text" name="lastname" />
          Email
          <input type="email" name="lastname" />
          Phone
          <input type="tel" name="phone" />
          Date of Birth
          <input type="date" name="birth" />
      </fieldset>
      <fieldset>
      <legend>WHAT DO YOU DO</legend>
        <input type="button" name="tagLifeCoach" id="tagLifeCoach" value="Life Coach" className="TagButtons"/>
        <input type="button" name="tagSpiritual" id="tagSpiritual" value="Spiritual Practitioner" className="TagButtons"/>
        <input type="button" name="tagStrength" id="tagStrength" value="Strength Trainer" className="TagButtons"/>
        <input type="button" name="tagPerformance" id="tagPerformance" value="Performance Coach" className="TagButtons"/>

        <input type="button" name="tagMeditation" id="tagMeditation" value="Meditation Coach" className="TagButtons"/>
        <input type="button" name="tagMessage" id="tagMessage" value="Massage Therapist" className="TagButtons"/>
        <input type="button" name="tagRolfer" id="tagRolfer" value="Rolfer" className="TagButtons"/>

        <input type="button" name="tagLeadership" id="tagLeadership" value="Leadership Coach" className="TagButtons"/>
        <input type="button" name="tagCareer" id="tagCareer" value="Career Coach" className="TagButtons"/>

        <input type="button" name="tagNutritionist" id="tagNutritionist" value="Nutritionist" className="TagButtons"/>
        <input type="button" name="tagBehavioral" id="tagBehavioral" value="Behavioral Therapist" className="TagButtons"/>
        <input type="button" name="tagPersonal" id="tagPersonal" value="Personal Trainer" className="TagButtons"/>

        <input type="button" name="tagHealth" id="tagHealth" value="Health Coach" className="TagButtons"/>
        <input type="button" name="tagHighPerformance" id="tagHighPerformance" value="High Performance Personal Trainer" className="TagButtons"/>
        <input type="button" name="tagDietician" id="tagDietician" value="Dietician" className="TagButtons"/>

      </fieldset>
      <fieldset>
        <legend>PHOTO AND BIO</legend>
        Please provide a short professional bio (50 words or less)
        <input type="text" name="bio" />
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  </div>

</template>

<styled scoped>


</styled>
