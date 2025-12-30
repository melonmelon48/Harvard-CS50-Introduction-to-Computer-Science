#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Prompt for a name
    string name = get_string("name: ");

    // Prompt for an age
    int age = get_int("age: ");

    // Prompt for a phone
    string phone = get_string("phone: ");
    // print name, age, and phone
    printf("%s is %i years old and her number is %s\n", name, age, phone);

}
