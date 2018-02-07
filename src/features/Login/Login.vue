<template>
  <Layout>
    <Title_ />
    <Form_>
      <UsernameLoginInput
        :handleOnEnterPress="handleSubmit"
      />
      <div class="u-containerDistance--standard">
        <PasswordLoginInput
          class="u-block"
          :handleOnEnterPress="handleSubmit"
        />
      </div>
      <div class="u-containerDistance--standard">
        <LoginButton
          @click.native="handleSubmit"
        />
      </div>
    </Form_>
  </Layout>
</template>

<script>
import UsernameLoginInput from '@/components/Input/Login/Username';
import PasswordLoginInput from '@/components/Input/Login/Password';
import LoginButton from '@/components/Button/Login';
import Layout from './Layout';
import Title_ from './Title';
import Form_ from './Form';

export default {
  components: {
    Layout,
    Title_,
    Form_,
    UsernameLoginInput,
    PasswordLoginInput,
    LoginButton,
  },
  methods: {
    handleSubmit() {
      console.log('submited, let\'s do something');
    },
  },
};
</script>
