// Online Java Compiler
// Use this editor to write, compile and run your Java code online

// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;  

class HelloWorld {
    public static void main(String[] args) {
        int savings=0,investment=0, total =0;
        int invst=1;
        int costofliving=0;
        int y=0;
        Scanner sc=new Scanner(System.in);  
        System.out.println("Grad Age");
        int grad= sc.nextInt();
        System.out.println("Savings");
        int init= sc.nextInt();
        System.out.println("Salary");
        int salary= sc.nextInt();
        System.out.println("Child");
        int child = sc.nextInt();
        init = init - (child * 170000) ;
       
        while(total < (84-grad)*24000)
        {
            if (invst == 1 )
            {
               
                if (grad<=55)
                {
                    if (grad<31)
                    {  
                        if(y==0)
                        {
                            costofliving = 1500;
                            y=1;
                        }
                        for (int x=0;x<12;x++)
                        {
                            savings = savings + (((salary * 80/100)-costofliving)*60/100);
                            investment = investment + (((salary * 80/100)-costofliving)*40/100);
                        }
                        investment = investment + (investment * 5/100);
                        salary = salary + (salary * 3/100);
                        total = init + investment + savings;
                        grad++;
                        costofliving = costofliving * (105/100);
                    }
                    else
                    {
                        if(y==1)
                        {
                            costofliving = 5200;
                            y=0;
                        }
                        for (int x=0;x<12;x++)
                        {
                            savings = savings + (((salary * 80/100)-costofliving)*60/100);
                            investment = investment + (((salary * 80/100)-costofliving)*40/100);
                        }
                        investment = investment + (investment * 5/100);
                        salary = salary + (salary * 3/100);
                        total = init + investment + savings;
                        grad++;
                        costofliving = costofliving * (105/100);
                    }
                }
                else if (grad <=60)
                {
                        if(y==0)
                        {
                            costofliving = 2000;
                            y=1;
                        }
                    for (int x=0;x<12;x++)
                    {
                        savings = savings + (((salary * 86/100)-costofliving)*60/100);
                        investment = investment + (((salary * 86/100)-costofliving)*40/100);
                    }
                    investment = investment + (investment * 5/100);
                    salary = salary + (salary * 1/100);
                    total = init + investment + savings;
                    grad++;
                    costofliving = costofliving * (105/100);
                }
                else if (grad <=65)
                {  
                        if(y==1)
                        {
                            costofliving = 2000;
                            y=0;
                        }
                    for (int x=0;x<12;x++)
                    {
                        savings = savings + (((salary * 92/100)-costofliving)*60/100);
                        investment = investment + (((salary * 92/100)-costofliving)*40/100);
                    }
                    investment = investment + (investment * 5/100);
                    salary = salary;
                    total = init + investment + savings;
                    grad++;
                    costofliving = costofliving * (105/100);
                }
                else if (grad <=70)
                {
                        if(y==0)
                        {
                            costofliving = 2000;
                            y=1;
                        }
                    for (int x=0;x<12;x++)
                    {
                        savings = savings + (((salary * 94/100)-costofliving)*60/100);
                        investment = investment + (((salary * 94/100)-costofliving)*40/100);
                    }
                    investment = investment + (investment * 5/100);
                    salary = salary;
                    total = init + investment + savings;
                    grad++;
                    costofliving = costofliving * (105/100);
                }
                else
                {
                        if(y==1)
                        {
                            costofliving = 2000;
                            y=0;
                        }
                    for (int x=0;x<12;x++)
                    {
                        savings = savings + (((salary * 95/100)-costofliving)*60/100);
                        investment = investment + (((salary * 95/100)-costofliving)*40/100);
                    }
                    investment = investment + (investment * 5/100);
                    salary = salary;
                    total = init + investment + savings;
                    grad++;
                    costofliving = costofliving * (105/100);
                }
            }
            else
            {
                    if (grad<=55)
                {
                    if (grad<31)
                    {
                        if(y==0)
                        {
                            costofliving = 1500;
                            y=1;
                        }
                        for (int x=0;x<12;x++)
                        {
                            savings = savings + ((salary * 80/100)-costofliving);
                        }
                        salary = salary + (salary * 3/100);
                        total = init +  savings;
                        grad++;
                        costofliving = costofliving * (105/100);
                       
                    }
                    else
                    {
                        if(y==1)
                        {
                            costofliving = 5200; // 2 child + wife
                            y=0;
                        }
                        for (int x=0;x<12;x++)
                        {
                            savings = savings + ((salary * 80/100)-costofliving);
                        }
                        salary = salary + (salary * 3/100);
                        total = init +  savings;
                        grad++;
                    costofliving = costofliving * (105/100);
                    }
                }
                else if (grad <=60)
                {
                        if(y==0)
                        {
                            costofliving = 2000; 
                            y=1;
                        }
                    for (int x=0;x<12;x++)
                    {
                        savings = savings + (((salary * 86/100)-costofliving));
                    }
                    salary = salary + (salary * 1/100);
                    total = init +  savings;
                    grad++;
                    costofliving = costofliving * (105/100);
                }
                else if (grad <=65)
                {
                        if(y==1)
                        {
                            costofliving = 2000;
                            y=0;
                        }
                    for (int x=0;x<12;x++)
                    {
                        savings = savings + ((salary * 92/100)-costofliving);
                    }
                    salary = salary;
                    total = init +  savings;
                    grad++;
                    costofliving = costofliving * (105/100);
                }
                else if (grad <=70)
                {
                        if(y==0)
                        {
                            costofliving = 2000;
                            y=1;
                        }
                    for (int x=0;x<12;x++)
                    {
                        savings = savings + ((salary * 94/100)-costofliving);
                    }
                    salary = salary;
                    total = init +  savings;
                    grad++;
                    costofliving = costofliving * (105/100);
                }
                else
                {
                        if(y==1)
                        {
                            costofliving = 2000;
                            y=0;
                        }
                    for (int x=0;x<12;x++)
                    {
                        savings = savings + ((salary * 95/100)-costofliving);
                    }
                    salary = salary;
                    total = init +  savings;
                    grad++;
                    costofliving = costofliving * (105/100);
                }
            }
        }
        System.out.println("Age Retire : " + grad);
        System.out.println("total : "+ total);
        System.out.println("savings :" +savings);
        System.out.println("investment :" +investment);
       
    }
}
