import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any = []
  public teams: any = []
  public loaded: boolean = true;
  constructor() { 
    this.items = [
      { title: "Asylum and Human Rights",
        description: "If you fear returning to your home country then we can help. We are renowned for our outstanding representation of those in need of asylum. The London based BOUTIQUE team have handled and managed many high profile asylum claims coupled with extradition and deportation matters. We are able to assist in any asylum, deportation or extradition claim at all levels, including those with complex features and have taken cases as far as the Supreme Court and European Court of Human Rights. We can also assist in submitting fresh claims for asylum where appropriate."
      },
      { title: "Challenging Decisions",
        description: "At BOUTIQUE, we have accumulated a great deal of experience in challenging Home Office decisions. As solicitors, we can handle appeals and judicial reviews on behalf of individuals and businesses and have taken cases as far as The Supreme Court and European Court of Human Rights."
      },
      { title: "Human Rights and Long Residence",
        description: "If your family or private life is in the UK and you don’t want to return to your home country then we can help. At BOUTIQUE, we are renowned for our outstanding representation of those wishing to continue to enjoy their private and family life in the UK. We have been recognised for taking cases as far as the Supreme Court and European Court of Human Rights. Our team of legal experts can assist at any level including complex deportation cases and we have extensive experience in assisting our clients with long residence human rights applications based on family and private life."
      },
      { title: "Children of British or Settled Parents",
        description: "If your child is under 18 years of age, lives outside the UK and they have a parent or relative who is settled in the UK, they could be eligible to apply to come to the UK and settle here. If you are a parent and are applying for limited leave to remain in the UK and your parent is British or partner is settled in the UK you may also be able to apply for your child to come and remain in line with you. You can apply for indefinite leave to enter the UK for your child if they are coming to the UK to live with both of their parents and both parents either have British citizenship or indefinite leave to remain."
      },
      { title: "Marriage, Partner and Fiancé Visas", 
        description: "Applicable to spouses and partners of British Citizens, this category is for those who are settled in the UK (have indefinite leave to remain or permanent residence) or have refugee status/humanitarian protection in the UK. You are allowed to bring your dependent children aged 18 or under, then eventually after 5 years continuous residence, you may have the right to reside in the UK permanently and ultimately qualify for British Citizenship. Immigration for spouses, fiancés and partners is arguably more difficult than ever. The law is complex and UK Visas and Immigration have strict rules on the documentation required to support applications. If the correct documents are not submitted in precisely the format required, the application will fail."
      },
      { title: "Tier 1 – Graduate Entrepreneur Visa",
        description: "This route is for Graduates who have graduated in the UK or abroad who have been officially endorsed as having a genuine and credible business idea. You must be endorsed by either the Department for International Trade (DIT) as part of the elite global graduate Entrepreneur Program (Sirius) or a UK Higher Education Institution (HEI) that is an authorised endorsing body."
      },
      { title: "Investor (Tier 1)",
        description: "This category is for high net worth individuals making a substantial investment in the UK. The investment must be at least £2 million in the UK by way of UK Government bonds, share capital or Loan capital in active and trading UK registered companies. You will be able to bring your spouse and children to the UK and you may eventually have the right to reside in the UK permanently and ultimately qualify for British Citizenship."
      },
      { title: "Sponsor License",
       description: "If you are looking to hire skilled individuals from outside the EEA who do not already have the right to work in the UK, you will need to obtain a Tier 2 or Tier 5 Sponsor Licence."
      },
      { title: "Entrepreneurs Visa – establishing a business in the UK",
        description: "If you are a businessperson and wish to establish or invest in a UK business then the Tier 1 Entrepreneur category may be for you. You will be able to bring your spouse and children to the UK and you may eventually have the right to reside in the UK permanently and ultimately qualify for British Citizenship. Immigration to the UK is arguably more difficult than ever. The requirements are tough, the law is complex and the rules and policies frequently change. On top of this UK Visas & Immigration has strict rules on the documentation needed to support applications. If the correct documents are not submitted in precisely the format required, the application will fail."
      },
      { title: "Representative of an Overseas Business Visa",
        description: "A business which has its headquarters or principle place of business outside the UK can send an overseas representative to the UK to set up a branch office or subsidiary in the UK."
      },
    ];
    this.teams = [
      { name: "Stefan Zweistra",
        role: "Solicitor/Supervisor",
        headshot: "assets/1.jpg"    
      },
      { name: "Susana Collins",
        role: "Quality Compliance Manager & Solicitor",
        headshot: "assets/2.jpg"    
      },
      { name: "Stephen Crawford",
        role: "Senior Caseworker",
        headshot: "assets/3.jpg"    
      },
      { name: "Nathaniel Burns",
        role: "Supervisor Senior Caseworker",
        headshot: "assets/4.jpg"  
      },
      { name: "Joe Bloggs",
        role: "Solicitor/Senior Caseworker",
        headshot: "assets/5.jpg"    
      },
      { name: "Anna Jeffries",
        role: "Senior Caseworker/Supervisor",
        headshot: "assets/6.jpg"    
      }
    ]
  }
  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  filterTeam(searchTerm) {
    return this.teams.filter(team => {
      return team.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  

  getData(id) {
    return this.items.find(items => items.id = id)   }

  getTeamData(id) {
    return this.teams.find(teams => teams.id = id)
  }

}
