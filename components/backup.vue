<template>
  <SfFooter :column="5" multiple class="footer">
    <SfFooterColumn :title="$t('About Snitch')">
      <SfList >
        <SfListItem 
          v-for="item in aboutsnitch"
          :key="item"
          >
          <SfMenuItem 
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Returns')">
      <SfList>
        <SfListItem
          v-for="item in returns"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Categories')">
      <SfList>
        <SfListItem
          v-for="item in categories"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('Get to know us better')">
      <SfList>
        <SfListItem
          v-for="item in gettoknow"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn :title="$t('CUSTOMER CARE:')">
      <SfList>
        <SfListItem
          v-for="item in cc"
          :key="item"
        >
          <SfMenuItem
            :label="$t(item)"
          />
          
        </SfListItem>
      </SfList>
      
      <SfList class="dislay_footerimage">
        <SfListItem v-for="item in social" :key="item" >
      
        <SfImage class="footer__social-image"  :key="item" :src="'/icons/'+item+'.svg'" :alt="item" width="32" height="32" />
       
      </SfListItem>
      </SfList>
    </SfFooterColumn>
    <!-- <SfFooterColumn title="Social">
      <div class="footer__socials">
        <SfImage class="footer__social-image" v-for="item in social" :key="item" :src="'/icons/'+item+'.svg'" :alt="item" width="32" height="32" />
      </div>
    </SfFooterColumn> -->
  </SfFooter>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem } from '@storefront-ui/vue';


export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem
  },
  data() {
    return {
      aboutsnitch: ['Encapsulating inspirations from', 'around the globe, SNITCH crafts', 'clothing for the fashion-forward','modern man. Offering an','unconventional style ethos as a','mens fast fashion brand, we','design style in response'],
      returns: ['Click To Place Return ', 'Returns & Exchange Policy'],
     categories: ['Shirts', 'T-Shirts', 'Jeans','Shorts','Co-ords','Boxers','Combo Deals'],
      gettoknow: ['CSR', 'FAQ','Contact Us','Terms & Conditions','Privacy Policy','Payment Terms','Track Order','Blogs'],
      cc: ['+91 080 4710 4444','','support@snitch.co.in'],
      social: ['facebook', 'pinterest', 'google', 'twitter', 'youtube',""],
      isMobile: false,
    
    };
  }
};
</script>

<style lang="scss">
span:hover{
  color: #000000;
}
.footer {
  margin-bottom: 3.75rem;
  background-color:#fff;
  @include for-desktop {
    margin-bottom: 0;
   
  }
  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);
    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
    }
  }
  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
  }
}
.sf-footer {
  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    margin-top: var(--spacer-2xl);
  }
  &__container {
    margin: var(--spacer-sm);
    @include for-desktop {
   
      margin: 0 auto;
    }
  }
}
.font_color{
  color: red;
}
.sf-footer-column{
 background-color:#fff;

}


.sf-footer-column__title{
  color: rgb(0, 0, 0);
  background-color:#fff;
}
.sf-menu-item__label{
  color:#a3a3a3;
}
.sf-footer__container{
  max-width: 90rem ;
 padding: 0px;

}
.sf-footer{
   padding: 0px ;
   padding-left: 5%;
   border-top: none;
}
.dislay_footerimage{
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
}
 @include for-mobile{
.dislay_footerimage{
  display:none;
}
 }
</style>