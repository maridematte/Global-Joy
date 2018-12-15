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
        <legend> PROFESSIONAL INFO </legend>
        <span> What is your professional title? (you can select more than one) </span>
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

        <br />
        <span> How long have you worked in this position? </span>
          <input type="text" name="experienceProf" id="experienceProf" />
          <br />
        <span> Do you have a certification or license? </span>
          <input type="radio" name="licenseProf" id="licenseProf" value="Yes"/>
          <label for="Yes">Yes</label>
        <br/>
          <input type="radio" name="licenseProf" id="licenseProf" value="No"/>
          <label for="No">No</label>

        <br />
        <span> If yes, upload documents here (optional) </span>
          <button name="certificationButton" id="certificationButton">
            Select File
          </button>
      </fieldset>

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
