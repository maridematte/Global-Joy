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
