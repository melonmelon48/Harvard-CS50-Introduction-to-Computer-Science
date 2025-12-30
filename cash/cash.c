#include <cs50.h>
#include <stdio.h>

int calculate_quarters(int cents);

int main(void)
{
    int cents;
    do
    {
        cents = get_int("Change owed: ");
    }
    while (cents < 0);

    int coins = 0;

    // Calculate quarters
    int quarters = calculate_quarters(cents);
    coins += quarters;
    cents -= quarters * 25;

    // Calculate remaining coins
    int remainder[] = {10, 5, 1};
    for (int i = 0; i < 3; i++)
    {
        coins += cents / remainder[i];
        cents %= remainder[i];
    }

    printf("%d\n", coins);
}

int calculate_quarters(int cents)
{
    int quarters = 0;
    while (cents >= 25)
    {
        quarters++;
        cents = cents - 25;
    }
    return quarters;
}
